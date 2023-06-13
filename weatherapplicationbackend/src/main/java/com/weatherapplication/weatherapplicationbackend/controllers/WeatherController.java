package com.weatherapplication.weatherapplicationbackend.controllers;
import com.weatherapplication.weatherapplicationbackend.model.WeatherResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/weather")
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    //@Value("${openweather.api.key}") String apiKey
    @GetMapping("/{city}")
    public ResponseEntity<?> getWeatherData(@PathVariable String city) {
        String apiKey = "5636ae91b007f1f0fcb4251935d06835";
        String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey +"&units=metric";

        RestTemplate restTemplate = new RestTemplate();
        WeatherResponse weatherResponse = restTemplate.getForObject(apiUrl, WeatherResponse.class);

        if (weatherResponse != null) {
            return ResponseEntity.ok(weatherResponse);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to retrieve weather data");
        }
    }
}
