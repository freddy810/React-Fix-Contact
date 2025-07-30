<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactApiController extends Controller
{
    public function index()
    {
        return response()->json(Contact::latest()->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'nom' => 'required|max:13',
                'numPhone' => ['required', 'regex:/^[0-9 ]+$/', 'min:3', 'max:10'],
                'adresseEmail' => 'nullable',
                'enregistrementSIM' => 'required',
            ],
            [
                'nom.required' => 'Le nom est obligatoire.',
                'nom.max' => 'Le nom ne doit pas dépasser 13 caractères.',
                'numPhone.required' => 'Le numéro de téléphone est obligatoire.',
                'numPhone.regex' => 'Le numéro de téléphone doit contenir uniquement des chiffres et des espaces.',
                'numPhone.min' => 'Le numéro de téléphone doit contenir au moins 3 caractères.',
                'numPhone.max' => 'Le numéro de téléphone ne doit pas dépasser 10 caractères.',
                'enregistrementSIM.required' => 'Le champ SIM est obligatoire.',
            ]
        );

        $contact = Contact::create($validated);
        return response()->json($contact, 201);
    }

    public function show(Contact $contact)
    {
        return response()->json($contact, 200);
    }

    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate(
            [
                'nom' => 'required|max:13',
                'numPhone' => ['required', 'regex:/^[0-9 ]+$/', 'min:3', 'max:10'],
                'adresseEmail' => 'nullable',
                'enregistrementSIM' => 'required',
            ],
            [
                'nom.required' => 'Le nom est obligatoire.',
                'nom.max' => 'Le nom ne doit pas dépasser 13 caractères.',
                'numPhone.required' => 'Le numéro de téléphone est obligatoire.',
                'numPhone.regex' => 'Le numéro de téléphone doit contenir uniquement des chiffres et des espaces.',
                'numPhone.min' => 'Le numéro de téléphone doit contenir au moins 3 caractères.',
                'numPhone.max' => 'Le numéro de téléphone ne doit pas dépasser 10 caractères.',
                'enregistrementSIM.required' => 'Le champ SIM est obligatoire.',
            ]
        );

        $contact->update($validated);
        return response()->json($contact, 200);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json(['message' => 'Contact supprimé avec succès.'], 204);
    }
}
