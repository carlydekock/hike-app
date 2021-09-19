INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ('auth0|60d68c7dc0b80a006a831d43', 'Carly', 'Dekock', 'carly.m.dekock@gmail.com');

INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ('auth0|6100548cc724050071b58567', 'Carly', 'McBride', 'carly.a.mcbride@gmail.com');

INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ('auth0|6114b6ce2b1c5d006944cd34', 'Sahar', 'Bala', 'hellosaharb@gmail.com');

INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ('auth0|611727de9b035d00695b0720', 'bcdekock@gmail.com', '', 'bcdekock');

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (1, 'Mount Adams South Climb', 'The south climb or lunch counter approach.', '12.0 mi', '6700 ft', '6 hours', 'wildflowers, vista', 46.1359, -121.4976);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (1, 'Mount Baker Heliotrope Ridge', 'Heliotrope ridge trail overlooking Mount Baker', '5.5 mi', '1400 ft', '3 hours', 'wildflowers, vista, mountain view', 48.8021, -121.8957);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (1, 'The Brothers', 'Scramble climbing route to the summit of a mountain in the Olympic range, very technical.', '18.0 mi', '6050 ft', '10 hours', 'scramble, vista', 47.5997, -123.1512);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (1, 'Park Butte', 'Steep vertical climb with great views of Mount Rainier.', '7.5 mi', '2200 ft', '4 hours', 'vista, flowers, streams', 48.7067, -121.8122);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (1, 'Diablo Lake', 'Overlook a beautiful blue lake in the North Cascades.', '7.6 miles', '1400 ft', '3 hours', 'vista, lake', 48.7206, -121.1216);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (1, 'Blue Lake', 'Towering granite peaks, forests, meadows and wildflowers with a pristine blue mountain lake.', '4.4 miles', '1050 ft', '3 hours', 'lake, forest', 48.5191, -120.6742);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (3, 'Dege Peak', 'Short hike from Mt Rainier, great views.', '4.0 mi', '600 ft', '40 min', 'wildflowers, mountain, views', 46.9146, -121.6423);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (4, 'Rattlesnake Ledge', 'Forest trail with views of the Cedar River watershed and Mount Si.', '4.0 mi', '1160 ft', '3 hrs', 'forest, mountains', 47.4347, -121.7687);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (2, 'Snow Lake', 'Beautiful lake tucked under Chair Peak, accessible via Alpental Ski Area.', '7.2 mi', '1800 ft', '3 hrs', 'alpine lake, rugged terrain', 47.4454, -121.4230);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (2, 'Skyline Lake', 'Short climb up the ridge opposite Stevens Pass Ski Area.', '3.0 mi', '1100 ft', '1.5 hrs', 'snowshoe, mountain views', 47.7472, -121.0882);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (2, 'Wallace Falls State Park', 'Wind your way along the river to nine dazzling waterfalls', '5.6 mi', '1300 ft', '3 hrs', 'waterfalls, forest', 47.8669, -121.6780);

INSERT INTO hikes_list (user_id, name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES (2, 'Ross Dam Trail', 'Short hike that offers views of Ross Lake, connects to numerous other trails.', '1.6 mi', '500 ft', '45 min', 'lake, mountains', 48.7278, -121.0628);

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES (1, 1, 'Carly', 'Sunny day!', 'Great hike on a sunny day the other day, conditions good.', 'June 24');

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES (2, 1, 'Carly', 'Beautiful view!', 'Nice sunny day for a hike, amazing to see how little snow remains!', 'Sept 8');

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES (10, 1, 'Carly', 'Great workout!', 'Ski toured up to the ridge, beautiful views of the ski area.', 'Feb 25');

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES (6, 1, 'Carly', 'Such a beautiful place!', 'Great day to walk up to Blue Lake, thankfully a lot of the area was spared by fires.', 'Sept 5');