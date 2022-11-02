<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LoginRequest $request)
    {
        // $credentials = $request->validate([
        //     'email' => ['required','email'],
        //     'password' => ['required'],
        // ]);
        $request->validated($request->all());

        if (Auth::attempt($credentials)){
            $user = Auth::user();
            return response()->json([$user,'login success']);
        }
        return response()->json('Login failed: Invalid username or password', 422);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response('Token deleted successed!',204);
    }
    
    public function login(LoginRequest $request){
        // $credentials = $request->validate([
        //     'email' => ['required','email'],
        //     'password' => ['required'],
        // ]);

        $request->validated($request->all());

        if (Auth::attempt( $credentials)) {
            $user =  Auth::user();
            $user-> access_token = $user -> createToken("API_TOKEN")->plainTextToken;
            return response()->json(['Login Success',$user]);
        }
        return response()->json('Login failed: Invalid username or password.', 422);
    }

    public function logout(Request $request)
    {
        $request -> auth() -> user() -> tokens() -> delete();
        return response()->json('logout success!', 204);
    }
}
