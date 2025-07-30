<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // nom entre 1 et 13 caractères
            'nom' => $this->faker->regexify('[A-Za-z]{3,13}'),

            // numPhone : chiffres et espaces, longueur entre 3 et 10
            'numPhone' => $this->faker->numerify(str_repeat('#', rand(3, 10))),

            // email nullable aléatoirement
            'adresseEmail' => $this->faker->boolean(70) ? $this->faker->unique()->safeEmail() : null,

            // enregistrementSIM : valeurs valides uniquement
            'enregistrementSIM' => $this->faker->randomElement(['orange', 'telma']),
        ];
    }
}
