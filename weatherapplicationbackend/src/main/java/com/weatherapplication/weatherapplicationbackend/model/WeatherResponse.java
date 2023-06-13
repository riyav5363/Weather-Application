package com.weatherapplication.weatherapplicationbackend.model;

public class WeatherResponse {
    private Weather[] weather;
    private Main main;
    private Coord coord;
    private Wind wind;
    private Sys sys;

    // Getters and setters

    public Weather[] getWeather() {
        return weather;
    }

    public void setWeather(Weather[] weather) {
        this.weather = weather;
    }

    public Main getMain() {
        return main;
    }

    public void setMain(Main main) {
        this.main = main;
    }

    public Coord getCoord(){
        return coord;
    }

    public void setCoord(Coord coord){
        this.coord = coord;
    }

    public Wind getWind(){
        return wind;
    }

    public void setWind(Wind wind) {
        this.wind = wind;
    }
    public Sys getSys(){
        return sys;
    }
    public void setSys(){
        this.sys = sys;
    }
}

class Coord{

    private double lon;

    private double lat;

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(int lat) {
        this.lat = lat;
    }

}
class Weather {
    private String main;
    private String description;
    private String icon;
    // Getters and setters

    public String getMain() {
        return main;
    }

    public void setMain(String main) {
        this.main = main;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}

class Wind{

    private double speed;

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

}
class Main {
    private double temp;
    private int humidity;
    private int pressure;

    // Getters and setters

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public int getHumidity() {
        return humidity;
    }

    public void setHumidity(int humidity) {
        this.humidity = humidity;
    }

    public int getPressure() {
        return pressure;
    }

    public void setPressure(int pressure) {
        this.pressure = pressure;
    }
}

class Sys{

    private String country;

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}