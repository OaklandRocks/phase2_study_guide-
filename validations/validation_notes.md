To validate a boolean, you must use one of the following:

```ruby
validates_acceptance_of :verified
validates_inclusion_of :verified, :in => [ true, false ]
```

If you want the boolean to always be true, use validates_acceptance_of.
If you want to ensure the boolean is either true or false, use validates_inclusion_of.
