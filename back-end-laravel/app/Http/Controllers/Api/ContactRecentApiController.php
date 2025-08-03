<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactRecent;
use Illuminate\Http\Request;

class ContactRecentApiController extends Controller
{
    // Affiche tous les contacts récents
    public function index()
    {
        // Récupère tous les contacts récents avec les champs souhaités
        $contacts = ContactRecent::select('id', 'nom', 'enregistrementSIM', 'momentVoir')->get();

        return response()->json($contacts);
    }

    // ajoute un contact récent
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'nom' => 'required',
                'enregistrementSIM' => 'required',
                'momentVoir' => 'required',
            ]
        );

        $contact = ContactRecent::create($validated);
        return response()->json($contact, 201);
    }

    // Supprime un contact récent par ID
    public function destroy($id)
    {
        $contact = ContactRecent::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact non trouvé'], 404);
        }

        $contact->delete();

        return response()->json(['message' => 'Contact supprimé avec succès']);
    }
}
