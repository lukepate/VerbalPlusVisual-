#  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

## First i'll need a way to itterate through all of the numbers 1-100. To keep things really simple, I'll go with a traditonal for loop.

## Next After itterating a number, i'll need a way to check if the current itterator is divisible by 3 or 5. I wrote two sepertae
## if statements for the check.

## If the current itteration is divisible by 3 or 5, I simply display it to the screen, or in part B push to an array and display the array.


#A
for i in 1..100
  if i % 3 == 0
   puts "#{i}"
  end
    if i % 5 == 0
   puts "#{i}"
  end
end


#B
arr = []

for i in 1..100
  if i % 3 == 0
   arr.push(i)
  end
    if i % 5 == 0
   arr.push(i)
  end
end

puts a
