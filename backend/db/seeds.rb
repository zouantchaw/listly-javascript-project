# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

list_a = List.create(name: "Shopping List")
list_b = List.create(name: "Weekly Workout")
list_c = List.create(name: "Fav Books")

list_item_1a = list_a.list_items.create(content: "Milk")
list_item_2a = list_a.list_items.create(content: "Cheese")
list_item_3a = list_a.list_items.create(content: "Yogurt")

list_item_1b = list_a.list_items.create(content: "Mon: 100 Push ups")
list_item_2b = list_b.list_items.create(content: "Tues: 20 Sit Ups")
list_item_3b = list_b.list_items.create(content: "Wed: 100 Jumping Jacks")

list_item_1c = list_c.list_items.create(content: "Waking Up")
list_item_2c = list_c.list_items.create(content: "Sidartha")
list_item_3c = list_c.list_items.create(content: "The Book of Life")

