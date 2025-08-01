<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactApiController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        if ($request->filled('recherche')) {
            $recherche = $request->recherche;
            $query->where(function ($q) use ($recherche) {
                $q->where('nom', 'like', '%' . $recherche . '%')
                    ->orWhere('numPhone', 'like', '%' . $recherche . '%')
                    ->orWhere('adresseEmail', 'like', '%' . $recherche . '%')
                    ->orWhere('enregistrementSIM', 'like', '%' . $recherche . '%');
            });
        }

        $contacts = $query->latest()->get();

        return response()->json($contacts, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'nom' => 'required|max:13',
                'numPhone' => 'required|regex:/^[0-9#\*]+$/|string|min:3|max:10',
                'adresseEmail' => 'nullable',
                'enregistrementSIM' => 'required',
            ],
            [
                'nom.required' => 'Le nom est obligatoire.',
                'nom.max' => '13 caractères max.',
                'numPhone.required' => 'Le n° est obligatoire.',
                'numPhone.regex' => 'chiffres, * et # seulement.',
                'numPhone.min' => '3 chiffres min',
                'numPhone.max' => '10 chiffres max',
                'enregistrementSIM.required' => 'Le SIM est obligatoire.',
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
                'numPhone' => 'required|regex:/^[0-9#\*]+$/|string|min:3|max:10',
                'adresseEmail' => 'nullable',
                'enregistrementSIM' => 'required',
            ],
            [
                'nom.required' => 'Le nom est obligatoire.',
                'nom.max' => '13 caractères max.',
                'numPhone.required' => 'Le n° est obligatoire.',
                'numPhone.regex' => 'chiffres, * et # seulement.',
                'numPhone.min' => '3 chiffres min',
                'numPhone.max' => '10 chiffres max',
                'enregistrementSIM.required' => 'Le SIM est obligatoire.',
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
