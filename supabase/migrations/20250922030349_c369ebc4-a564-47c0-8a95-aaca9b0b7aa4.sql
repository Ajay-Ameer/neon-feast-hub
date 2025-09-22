-- Update meal prices based on meal type
UPDATE meals 
SET price = CASE 
  WHEN meal_type = 'breakfast' THEN 240
  WHEN meal_type = 'lunch' THEN 260
  WHEN meal_type = 'snacks' THEN 210
  WHEN meal_type = 'dinner' THEN 250
  ELSE price -- Keep existing price if meal_type doesn't match
END;