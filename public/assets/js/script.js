$(function(){

    // Clock
	var clock = $('#clock');
	var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
	var digits = {};
	var positions = [
		'y1', 'y2', ':', 'mn1', 'mn2', ':', 'd1', 'd2', ':','h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
	];
    
    var labels = [
        'years', 'months', 'days', 'hours', 'minutes', 'seconds'
    ];

	var digit_holder = clock.find('.digits');
	$.each(positions, function(){
		if(this == ':'){
			digit_holder.append('<div class="dots">');
		} else{
			var pos = $('<div id="'+this+'"></div>');
			for(var i=1; i<8; i++){
				pos.append('<span class="side d' + i + '">');
			}
			digits[this] = pos;
			digit_holder.append(pos);
		}
	});
    
    var label_holder = clock.find('.labels');
    $.each(labels, function(){
        var label = $('<div class="label">'+this+'</div>');
        label_holder.append(label);
    });
    

	// Run a timer every second and update the clock
	(function update_time(){

        var dateNow = moment();
        var dateTo = moment('2016-06-21');
        var diff = dateTo.diff(dateNow);        
        
        var years = pad(moment.duration(diff).years(),2);
        var months = pad(moment.duration(diff).months(),2);
        var days = pad(moment.duration(diff).days(),2);
        var hours = pad(moment.duration(diff).hours(),2);
        var minutes = pad(moment.duration(diff).minutes(),2);
        var seconds = pad(moment.duration(diff).seconds(),2);
        
        var years_split = years.split("");
        var months_split = months.split("");
        var days_split = days.split("");
        var hours_split = hours.split("");
        var minutes_split = minutes.split("");
        var seconds_split = seconds.split("");
        
        digits.y1.attr('class', 'digit '+ digit_to_name[years_split[0]]);
        digits.y2.attr('class', 'digit '+ digit_to_name[years_split[1]]);
		digits.mn1.attr('class', 'digit '+ digit_to_name[months_split[0]]);
        digits.mn2.attr('class', 'digit '+ digit_to_name[months_split[1]]);
        digits.d1.attr('class', 'digit '+ digit_to_name[days_split[0]]);
        digits.d2.attr('class', 'digit '+ digit_to_name[days_split[1]]);
        digits.h1.attr('class', 'digit '+ digit_to_name[hours_split[0]]);
		digits.h2.attr('class', 'digit '+ digit_to_name[hours_split[1]]);
        digits.m1.attr('class', 'digit '+ digit_to_name[minutes_split[0]]);
		digits.m2.attr('class', 'digit '+ digit_to_name[minutes_split[1]]);
        digits.s1.attr('class', 'digit '+ digit_to_name[seconds_split[0]]);
		digits.s2.attr('class', 'digit '+ digit_to_name[seconds_split[1]]);

		// Schedule this function to be run again in 1 sec
		setTimeout(update_time, 1000);

	})();
    
    function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

});