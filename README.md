# AC REACT STORE

Link: https://ac-ecommerce-store.netlify.com

## Challenge

E-commerce Platform CRUD app for users to see the items information and add to cart to make payment with each authenticated users.

## Technologies

- React.js
- Context API
- Semantic UI React
- Styled Components
- CSS3
- Paypal


## Included Features

- User can log in with firbase authentication provided by Google.
- All users can view all listed items page in home directory, single item page, but only the authenticated users can add items to the cart and check out.
- Authenticated users can add items to the cart from the all items view pages (hompage) by hovering over the image to click on the cart icon fading in.

## Ruby on Rails setup

`$ create-react-app ac-react-store`

This command will generate all the boiler plate of react application

## CRUD Movies Algorithm

![main-page](./public/img/portfolio-images/main-page.jpg)
![single-page](./public/img/portfolio-images/single-page.jpg)
![single-page-modal-pop-up](./public/img/portfolio-images/single-page-modal-pop-up.jpg)
![authentication-page](./public/img/portfolio-images/authentication-page.jpg)
![in-cart-page](./public/img/portfolio-images/in-cart-page.png)
![paypal-checkout-page](./public/img/portfolio-images/paypal-checkout-page.png)

We can run to generate models by running:

`$ rails generate model Play title:string description:text director:string`

`$ rails generate model Review rating:integer comment:text`

`$ rails generate model Category name:string`

and we can generate migration files as following the relations by running:

`$ rails generate migration ...`

And then migration those migration files in to schema.rb by running

`$ rails db:migrate`

We can create controller by running:

`$ rails generate controller Movies`

The controller where we can control our model and view to create CRUD functionalities.

`Create: new, create Read: show, index Update: edit, update Delete: destroy`

These methods can be used to generate each CRUD functionalities.

And same for CRUD functionalities with reviews as well. You can find more details in the app/controllers repository.

![MVC-image](./public/image/MVC-pattern.png)

## Models relations

Play belongs to user and category and has many reviews

```ruby
class Play < ApplicationRecord
	belongs_to :user
	belongs_to :category
	has_many :reviews
end
```

Review belongs to play and user

```ruby
class Review < ApplicationRecord
	belongs_to :play
	belongs_to :user
end
```

Category has many plays

```ruby
class Category < ApplicationRecord
	has_many :plays
end
```

## Authentication set up

As following the documentation from devise github:

we can run

`$ rails generate devise:install`

`$ rails generate devise User`

`$ rails db:migrate`

would add devise methods as below, and we can also add relations to plays and reviews.

```ruby
class User < ApplicationRecord
	has_many :plays
	has_many :reviews
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
	devise :database_authenticatable,
	       :registerable,
	       :recoverable,
	       :rememberable,
	       :validatable
end
```

And with devise gem setup, setting User model has many plays and reviews in User.rb file.

## Problems

![heroku-dyno-problem](./public/image/images-rendering-errors-heroku.png)

Uploading images directly from public/images file to heroku didn't work. On heroku, each dyno gets its own ephemeral filesystem, with a fresh copy of the most recently deployed code. During the dyno’s lifetime its running processes can use the filesystem as a temporary scratchpad, but no files that are written are visible to processes in any other dyno and any files written will be discarded the moment the dyno is stopped or restarted. so I decided to use AWS S3 for the cloud storage where I can keep the image even though the dyno on heroku restarts.

## Test Driven Development:
