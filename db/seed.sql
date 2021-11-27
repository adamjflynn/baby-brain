INSERT INTO Action (action)
VALUES
('Diaper'),
('Feeding'),
('Sleep'),
('Growth'),
('Note');

INSERT INTO Parent (username,passoword)
VALUES
  ('Adam', 'Password'),
  ('Anne', '123456'),
  ('Ryan', 'picture1');
 
  INSERT INTO Baby (baby_name, parent_id)
VALUES
    ('Eli',1),
  ('Anna',1),
  ('Charlie',2),
   ('Marie',3),
   ('Everett',3),
  ('Audry',3),
  ('Cole',3);

    INSERT INTO Event (action_id, baby_id,note)
VALUES
    (1,1,'mixed'),
    (2,1,'20min'),
    (4,1,'30 lbs'),
    (1,2,'wet'),
    (3,2,'3hrs'),
    (4,2,'6lbs 4oz'),
    (5,2,'appt went well, need to feed every 3-4 hrs to increase weight faster'),
    (1,3,'dirty'),
    (2,3,'35min'),
    (5,3,'Charlie was really fussy today, ask at next appt if he is getting enough sleep'),
    (1,4,'wet'),
    (5,5,'Made it through the night with no accidents!'),
    (4,6,'38in tall'),
    (1,7,'35min'),
    (3,7,'6hrs');


  