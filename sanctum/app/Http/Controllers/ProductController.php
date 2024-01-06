<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product::paginate(2);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response()->json([
            "message"=> "create"

        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        try {
            $imageName = Str::random(32).'.'.$request->image->getClientOriginalExtension();
            
            Product::create([
                'name'=>$request->name,
                'image'=>$imageName,
                'description'=>$request->description,
            ]);
                // save image in storage folder /public
            
                Storage::disk('public')->put($imageName, file_get_contents($request->image));
        
                return response()->json([
                    'messsage'=> 'product added successfully '
                ],200);
            }catch (\Exception $e) {
            return response()->json([
                'message' => "Something went wrong!!!"
            ]);
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
