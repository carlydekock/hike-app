INSERT INTO users (auth_id, first_name, last_name, email_address) VALUES ('auth0|60d68c7dc0b80a006a831d43', 'Carly', 'Dekock', 'carly.m.dekock@gmail.com');

INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ('Mount Adams South Climb', 'The south climb or lunch counter approach.', '12.0 miles', 6700, '6 hours', 'wildflowers, vista', 46.1359, -121.4976);

INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ('Mount Baker Heliotrope Ridge', 'Heliotrope ridge trail overlooking Mount Baker', '5.5 miles', 1400, '3 hours', 'wildflowers, vista, mountain view', 48.8021, -121.8957);

INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ('The Brothers', 'Scramble climbing route to the summit of a mountain in the Olympic range, very technical.', '18 miles', 6050, '10 hours', 'scramble, vista', 47.5997, -123.1512);

INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ('Park Butte', 'Steep vertical climb with great views of Mount Rainier.', '7.5 miles', 2200, '4 hours', 'vista, flowers, streams', 48.7067, -121.8122);

INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ('Diablo Lake', 'Overlook beautiful blue lake in the North Cascades.', '7.6 miles', 1400, '3 hours', 'vista, lake', 48.7206, -121.1216);

INSERT INTO hikes_list (name, description, length, elevation_gain, time, keywords, latitude, longitude) VALUES ('Blue Lake', 'Towering granite peaks, forests, meadows and wildflowers with a pristine blue mountain lake.', '4.4 miles', 1050, '3 hours', 'lake, forest', 48.5191, -120.6742);

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES ('1', '1', 'Carly', 'Sunny day!', 'Great hike on a sunny day the other day, conditions good.', 'Jun 24');

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES ('1', '2', 'Ben', 'Great hike!', 'Super fun, would love to come back!', 'June 22');

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES ('2', '3', 'Bode', 'Woof', 'Went for a swim', 'June 23');

INSERT INTO trip_reports (hike_id, user_id, name, title, description, hiked_at) VALUES ('1', '4', 'Rossi', 'Pinecones', 'Ate all the pinecones!', 'June 24');