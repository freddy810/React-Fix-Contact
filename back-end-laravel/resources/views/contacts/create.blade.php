
@extends('layouts.app')
@section('title', 'Creation vehicule')
@section('content')


        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 bg-light mt-4 p-4">
                <form action="{{route('contacts.store')}}" method="POST">
                @csrf 
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="nom" class="form-label">nom</label>
                            <input type="text" name="nom" id="nom" class="form-control">
                            @if($errors->has('nom'))
                                <p class="text-danger">{{$errors->first('nom')}}</p'>
                            @endif
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="numPhone" class="form-label">numPhone</label>
                            <input type="text" name="numPhone" id="numPhone" class="form-control">
                            @if($errors->has('numPhone'))
                                <p class="text-danger">{{$errors->first('numPhone')}}</p'>
                            @endif
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="adresseEmail" class="form-label">adresseEmail</label>
                            <input type="text" name="adresseEmail" id="adresseEmail" class="form-control">
                        </div>
                    </div>

                    
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="enregistrementSIM" class="form-label">enregistrementSIM</label>
                            <input type="text" name="enregistrementSIM" id="enregistrementSIM" class="form-control">
                            @if($errors->has('enregistrementSIM'))
                                <p class="text-danger">{{$errors->first('enregistrementSIM')}}</p'>
                            @endif
                        </div>
                    </div>

                    <div class="bouton mt-3" style="float: right;">
                        <button type="submit" class="btn btn-primary mt-3">Enregistrer</button>
                        <a type="button" href="{{route('contacts.index')}}" class="btn btn-danger mt-3">Annuler</a>
                    </div>
                </form>
            </div>
        </div>

  @endsection

 