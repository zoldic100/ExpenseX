<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExpenseRequest;
use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         // Get the authenticated user
    $user = auth()->user();

    // Check if the user is authenticated
    if ($user) {
        // Use the relationship to get expenses associated with the user
        $expenses = Expense::where('user_id', $user->id)->get();

        // You can also use eager loading to load the expenses with additional information
        // $expenses = $user->expenses()->with('additionalRelation')->get();

        return response()->json($expenses, 200);
    }

    // If the user is not authenticated, return an appropriate response
    return response()->json(['message' => 'User not authenticated'], 401);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExpenseRequest $request)
    {
        try {
            Expense::create([
                'user_id' => $request->user_id,
                'name' => $request->name,
                'price' => $request->price,
                'description' => $request->description,
            ]);
    
            return response()->json([
                'message' => 'Expense added successfully'
            ], 200);
    
        } catch (\Exception $e) {
            // Log the error for debugging purposes
            Log::error('Error creating expense: ' . $e->getMessage());
    
            return response()->json([
                'message' => 'Something went wrong!'
            ], 500); // Use a 500 status code for server errors
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Expense $expense)
    {
        return response()->json($expense, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExpenseRequest $request,Expense $expense)
    {
        try {
     

            // Update the expense attributes
            $expense->update([
                'name' => $request->name,
                'price' => $request->price,
                'description' => $request->description,
            ]);

            return response()->json([
                'message' => 'Expense updated successfully'
            ], 200);

        } catch (\Exception $e) {
            // Log the error for debugging purposes
            Log::error('Error updating expense: ' . $e->getMessage());

            return response()->json([
                'message' => 'Something went wrong!'
            ], 500); // Use a 500 status code for server errors
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Expense $expense)
    {
        try {
            // Find the expense by its ID

            // Delete the expense
            $expense->delete();

            return response()->json([
                'message' => 'Expense deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            // Log the error for debugging purposes
            Log::error('Error deleting expense: ' . $e->getMessage());

            return response()->json([
                'message' => 'Something went wrong!'
            ], 500); // Use a 500 status code for server errors
        }
    }
    
}
