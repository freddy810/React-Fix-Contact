<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Contact::query(); // Correction ici

        if ($request->filled('recherche')) {
            $recherche = $request->recherche;

            $query->where(function ($q) use ($recherche) {
                $q->where('nom', 'like', '%' . $recherche . '%')
                    ->orWhere('numPhone', 'like', '%' . $recherche . '%')
                    ->orWhere('adresseEmail', 'like', '%' . $recherche . '%')
                    ->orWhere('enregistrementSIM', 'like', '%' . $recherche . '%');
            });
        }

        $contacts = $query->latest()->paginate(5);
        return view('contacts.index', compact('contacts'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('contacts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'nom' => 'required | max:13',
                'numPhone' => ['required', 'regex:/^[0-9 ]+$/', 'min:3', 'max:10'],
                'adresseEmail' => 'nullable',
                'enregistrementSIM' => 'required',

            ],
            [
                'nom.required' => 'Le nom est obligatoire',
                'nom.max' => 'Le nom est invalide (13 caractère maximum)',
                'numPhone.required' => 'Le numéro de téléphone est obligatoire',
                'numPhone.min' => 'Le numéro de téléphone est invalide (03 caractère minimum)',
                'numPhone.max' => 'Le numéro de téléphone est invalide (10 caractère maximum)',
                'numPhone.regex' => 'Le numéro de téléphone ne doit contenir que des chiffres et des espaces',
                'enregistrementSIM.required' => 'Le choix du SIM est obligatoire',
            ]
        );

        Contact::create($request->all());
        return redirect()->route('contacts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return view('contacts.show', compact('contact'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return view('contacts.edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate(
            [
                'nom' => 'required | max:13',
                'numPhone' => ['required', 'regex:/^[0-9 ]+$/', 'min:3', 'max:10'],
                'adresseEmail' => 'nullable',
                'enregistrementSIM' => 'required',

            ],
            [
                'nom.required' => 'Le nom est obligatoire',
                'nom.max' => 'Le nom est invalide (13 caractère maximum)',
                'numPhone.required' => 'Le numéro de téléphone est obligatoire',
                'numPhone.min' => 'Le numéro de téléphone est invalide (03 caractère minimum)',
                'numPhone.max' => 'Le numéro de téléphone est invalide (10 caractère maximum)',
                'numPhone.regex' => 'Le numéro de téléphone ne doit contenir que des chiffres et des espaces',
                'enregistrementSIM.required' => 'Le choix du SIM est obligatoire',
            ]
        );


        $contact->update($request->all());
        return redirect()->route('contacts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('contacts.index');
    }
}
