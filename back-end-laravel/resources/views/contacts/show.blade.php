
@extends('layouts.app')
@section('title', 'Creation vehicule')
@section('content')


        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 bg-light mt-4 p-4">
                <form action="" method="POST">
                @csrf 
                @method('PUT')
                <div class="row mb-3">
                    <div class="col-md-12">
                        <label for="nom" class="form-label">nom</label>
                        <input type="text" name="nom" id="nom" class="form-control" value="{{old('nom', $contact->nom)}}">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-12">
                        <label for="numPhone" class="form-label">numPhone</label>
                        <input type="text" name="numPhone" id="numPhone" class="form-control" value="{{old('numPhone', $contact->numPhone)}}">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-12">
                        <label for="adresseEmail" class="form-label">adresseEmail</label>
                        <input type="text" name="adresseEmail" id="adresseEmail" class="form-control" value="{{old('adresseEmail', $contact->adresseEmail)}}">
                    </div>
                </div>

                
                <div class="row mb-3">
                    <div class="col-md-12">
                        <label for="enregistrementSIM" class="form-label">enregistrementSIM</label>
                        <input type="text" name="enregistrementSIM" id="enregistrementSIM" class="form-control" value="{{old('enregistrementSIM', $contact->enregistrementSIM)}}">
                    </div>
                </div>

                    <div class="bouton mt-3" style="float: right;">
                        <a type="button" href="{{route('contacts.index')}}" class="btn btn-danger mt-3">OK</a>
                    </div>
                </form>
            </div>
        </div>

  @endsection

 