export class AppConstants {
    public static API_URL = 'http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/';
    public static API_ROOMS = AppConstants.API_URL + 'rooms/';
    public static API_SPEAKERS = AppConstants.API_URL + 'speakers';
    public static API_SCHEDULES = AppConstants.API_URL + 'schedules/';
    public static API_SCHEDULES_WEDNESDAY = AppConstants.API_SCHEDULES + 'wednesday';
    public static API_SCHEDULES_THURSDAY = AppConstants.API_SCHEDULES + 'thursday';
    public static API_SCHEDULES_FRIDAY = AppConstants.API_SCHEDULES + 'friday';
}
