<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
     public function handle(Request $request, Closure $next, $userTypes): Response
    {
        // Split the user types by the pipe character
        $userTypesArray = explode('|', $userTypes);

        // Check if the user is authenticated and has the correct user type
        if (auth()->check() && in_array(auth()->user()->type, $userTypesArray)) {
            return $next($request);
        }

        // Redirect back if the user does not have the correct access
        return redirect()->to('/')->with('error', 'Unauthorized access');
    }
}
