| CRUD | HTTP Verb |
| --------| ---------|
| Create | POST (or PUT with a new URI) |
| Read | GET |
| Update | PUT or PATCH (with an existing URI) |
| Delete | DELETE |

PUT/PATCH and DELETE are not supported by browsers
You need to fake out your browser in order to use them

```html
<form action=”/dogs” method=”POST”>
  <input type=”hidden” name=”_method” value=”DELETE”>
  <input type=”submit” value=”Delete this dog”>
</form>
```


| CRUD | Request Type | Path | Purpose |
| -----| ------- | ------- | -----------|
| Read | GET | /resources | list resources (index page) |
| Read | GET | /resources/new | form for resource |
| Create | POST | /resources | new resource |
| Read | GET | /resources/:id | specific resource (show page) |
| Read | GET | /resources/:id/:edit | edit form |
| Update | PUT | /resources/:id | update resources |
| Delete | DELETE | /resources/:id | delete resources |



Two resources


| CRUD | Request Type | Path | Purpose |
| -----| ------- | ------- | -----------|
| Read | GET | /restaurants/:restaurant_id/reviews | list resources (index page) |
| Read | GET | /restaurants/:restaurant_id/reviews/new | form for resource |
| Create | POST | /restaurants/:restaurant_id/reviews | new resource |
| Read | GET | /restaurants/:restaurant_id/reviews/:id | specific resource (show page) |
| Read | GET | /restaurants/:restaurant_id/reviews/:id/:edit | edit form |
| Update | PUT | /restaurants/:restaurant_id/reviews/:id | update resources |
| Delete | DELETE | /restaurants/:restaurant_id/reivews/:id | delete resources |

HELPER FILE:

For sessions/user log-in shit:

```ruby
helpers do
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
```


