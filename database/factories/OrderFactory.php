<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'tax_number' => $this->faker->randomNumber(9),
            'zip' => $this->faker->randomNumber(5),
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'notes' => $this->faker->text(50),
            'number' => $this->faker->randomNumber(7),
        ];

        /*  $startDate = Carbon::now()->addWeekdays(5);
          $endDate = $startDate->copy()->addDays($this->faker->numberBetween(1, 183));

          // Verifica si la fecha de vencimiento cae en un fin de semana y ajusta si es necesario
          while ($startDate->isWeekend() || $endDate->isWeekend()) {
              $startDate = Carbon::now()->addWeekdays(5);
              $endDate = $startDate->copy()->addDays($this->faker->numberBetween(1, 183));
          }

          return [
              'imageFiles' => $this->faker->imageUrl(),
              'numProducts' => $this->faker->numberBetween(1, 10),
              'numPerspective' => $this->faker->numberBetween(1, 3),
              'hasModel' => $this->faker->boolean(),
              '3DModel' => [
                  'path/to/model1.gltf',
                  'path/to/model2.obj',
                  // add more 3D files paths if seem so
              ],
              'deadline' => $this->faker->dateTimeBetween($startDate, $endDate),
              'additionalInfo' => $this->faker->text(100),
          ];*/
    }
}
