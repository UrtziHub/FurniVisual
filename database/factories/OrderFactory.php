<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

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
        $startDate = Carbon::now()->addWeekdays(5);
        $endDate = $startDate->copy()->addDays($this->faker->numberBetween(1, 20));

        return [
            'imageFiles' => $this->faker->imageUrl(),
            'numProducts' => $this->faker->numberBetween(1, 10),
            'numPerspective' => $this->faker->numberBetween(1, 10),
            'hasModel' => $this->faker->boolean(),
            '3DModel' => [
                'path/to/model1.gltf',
                'path/to/model2.obj',
                // add more 3D files paths if seem so
            ],
            'deadline' => $this->faker->dateTimeBetween($startDate, $endDate),
            'additionalInfo' => $this->faker->text(100),
        ];
    }
}
