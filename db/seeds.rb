# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

25.times do
  @meals = ['lunch', 'dinner']
  @courses = ['soup', 'salad', 'main', 'side']
  @boolean = [true, false]
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: Faker::Number.number(digits: 2),
    meal: @meals.sample,
    course: @courses.sample,
    v: @boolean.sample,
    veg: @boolean.sample,
    gluten: @boolean.sample,
    nuts: @boolean.sample,
    dairy: @boolean.sample,
    soy: @boolean.sample
  )
end

puts 'seeded'