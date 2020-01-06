# Installation

## Composer

```php
composer require package
```

## Package service provider

If you Laravel project version is 5.5 or higher you can avoid this step.

To add package service providers you can go to config/app.php file, and add 
the next lines to "Providers" array.

```php
Author\Package\PackageServiceProvider::class
Author\Package\PackageRouteServiceProvider::class
```

## Publish Vendor Files

In terminal execute the next command:

```php
php artisan vendor:publish
```

The package requires minimum this vendor publications:

```php
package views files
package migrations files
package translations files
```

Select the next optional files:

```php
package config files
```

Alternatively you can publish all files from the package 

```php
php artisan vendor:publish --flag
```