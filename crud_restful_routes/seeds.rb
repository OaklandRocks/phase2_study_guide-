@random_boolean = [true, false, false, false].sample

10.times do
  User.create!(email: Faker::Internet.email,
               name: Faker::Name.name,
               password: "password",
               avatar: Faker::Avatar.image(Faker::Lorem.word, "80x80"))
end

User.all.each do |user|
  rand(1..4).times do
    position = user.positions.create!(title: Faker::Name.title,
                                      annual_salary: rand(30..100)*1000,
                                      started_at: Time.now - rand(100..500).days,
                                      ended_at: Time.now + rand(1..50).days)
  end
end

Position.all.each do |position|
  rand(1..4).times do
    evaluation = position.evaluations.create!(summary: Faker::Lorem.paragraphs(rand(1..4)).join("\n"),
                                 probation: @random_boolean)
  end
end
