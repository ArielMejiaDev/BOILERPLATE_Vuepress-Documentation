# Package Views

The package add the next views:

- Panel View
- Create resource view
- Edit resource view
- Restore/Force Delete resource view

## Blade example

```blade
<h1>{{ $user->name }}</h1>
<p>{{ $user->email }}</p>
```

## Javascript Example

```javascript
<script>
    const users = ['John Doe', 'Anne Doe']
    console.log(users)
</script>
```

## VueJS Example

```VueJS
<p v-for="user in users">{{ $user.name }}</p>
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Page Title</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
    <body>

        <h1>{{ $user->name }}</h1>
        <p>{{ $user->email }}</p>

        <script>
            const users = ['John Doe', 'Anne Doe']
            console.log(users)
        </script>

        <script>
            <p v-for="user in users">{{ $user.name }}</p>
        </script>

    </body>
</html>

```