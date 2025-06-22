
import React from 'react';
import { Clock, Calendar, CheckCircle, XCircle } from 'lucide-react';

const WorkingHours = () => {
  const workingDays = [
    { day: 'Saturday', isWorking: true, hours: '8:00 AM - 12:00 PM', isHalfDay: true },
    { day: 'Sunday', isWorking: false, hours: 'Closed' },
    { day: 'Monday', isWorking: true, hours: '8:00 AM - 4:00 PM' },
    { day: 'Tuesday', isWorking: true, hours: '8:00 AM - 4:00 PM' },
    { day: 'Wednesday', isWorking: true, hours: '8:00 AM - 4:00 PM' },
    { day: 'Thursday', isWorking: true, hours: '8:00 AM - 4:00 PM' },
    { day: 'Friday', isWorking: true, hours: '8:00 AM - 4:00 PM' }
  ];

  const getCurrentDayIndex = () => {
    const today = new Date().getDay();
    // Convert Sunday=0 to our array format (Saturday=0)
    return today === 0 ? 1 : today === 1 ? 2 : today === 2 ? 3 : today === 3 ? 4 : today === 4 ? 5 : today === 5 ? 6 : 0;
  };

  const currentDayIndex = getCurrentDayIndex();

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/10 dark:from-muted/10 dark:to-muted/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 golden-glow">
            <Clock className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Working Hours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are available to serve you during the following hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Working Hours Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg luxury-shadow border border-border animate-fade-in">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                {workingDays.map((day, index) => (
                  <div
                    key={day.day}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                      index === currentDayIndex
                        ? 'bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 border border-brand-secondary'
                        : 'bg-muted/20 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      {day.isWorking ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className={`font-medium ${
                        index === currentDayIndex ? 'text-brand-secondary' : 'text-card-foreground'
                      }`}>
                        {day.day}
                      </span>
                      {index === currentDayIndex && (
                        <span className="text-xs bg-brand-secondary text-black px-2 py-1 rounded-full">
                          Today
                        </span>
                      )}
                      {day.isHalfDay && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                          Half Day
                        </span>
                      )}
                    </div>
                    <span className={`text-sm ${
                      day.isWorking ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {day.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg luxury-shadow border border-border animate-fade-in delay-200">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Additional Information</h3>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Full Working Days</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Monday - Friday
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Working Hours</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    8:00 AM - 4:00 PM
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Saturday Schedule</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    Half Day: 8:00 AM - 12:00 PM
                  </p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Day Off</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    Sunday - Closed
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Emergency Contact</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Available 24/7 for urgent matters via phone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
