# microReviews
microReviews is a product review site where users review the smallest components that make up a product.

All built using the MEAN stack...MongoDB, Express, Angular2, and Node.
Early design of the site will utilize Google's material design and bootstrap to help it be optimized for mobile.

## The Objective
The idea is that the site is for companies, manufacturers, and consumers could have a platform where they can view positive and negative criticism of products manufactured. This will hopefully create a database of information useful to both the consumer and the manufacturer so that we can create better products in the future.

## User stories
I started the website with two user stories. Two examples of how users would utilize the site. Instead of using Trello I am using meistertask, while it is difficult to storyboard website development having small deliverables to accomplish posted in a dashboard like this helps stay focused on the most important items.

![meiserTask Dashboard](http://i.imgur.com/7ihiwjR.png)

### Theodore the designer
Theodore works for HTC and he is a designer, he is part of the team getting ready to design the next flagship phone. He wants to know what compels people to buy a phone. He knows what HE likes... but he doesn't know what everybody else likes.

![Theodore User Story](http://i.imgur.com/Ebxe6i8.png)

### Pamela the consumer
Pamela is looking for a new toaster oven, and there are so many of the m in the market. They all have decent review online so she wants to see if she could start eliminating some options...she is looking to see who did it right, and who did it wrong.

![Pamela User Story](http://i.imgur.com/cHZ0IlQ.png)

# Live Version of site
The alpha version of the site is currently live utilizing Heroku and mLab MongoDB Services.

You can find the site at
http://microreviews.thebiscaynebay.com

The Angular2 code can be found on github.com https://github.com/sherwino/micro-review

# Screenshots
## Homepage
The current homepage is a three video carousel related to manufacturing and the processes behind some of the products we see everyday.

![Current Homepage](http://i.imgur.com/0z7FoHv.png?1)

# Problems
## Problems? There are no problems.
To keep track of some of the obstacles that I have come across I am going to temporarily log them in the README.md file.

### Models
The models are getting pretty complex and so far I have only set up the Angular side for the review submission.
The idea is that the user will search for a product to review...hopefully referring to an Api because there are probably millions of products that a user can review.

User should only review an existing product that has a UPC, the user will search from the review creation view for a product to review.
Save that searched product which will pre-populate most of the fields that you would have to fill out.. kind of like how Ebay does it when you create a new listing. And then add it to our database.

The UPC search is just to help the user pre-populate a lot of the information.

The complexity lies with the amount of references to other collections that has to be mapped.

...more on that later.
