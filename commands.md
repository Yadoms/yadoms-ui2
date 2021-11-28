# Create Library

```
 npx nx g @nrwl/workspace:library configurations --directory core
```

# Create Angular Library

```
 npx nx g @nrwl/angular:library configurations --directory angular-infrastructure
```

# Create Angular Component in angular-infrastructure-configurations project
```
npx nx g @nrwl/angular:component server-configurations --project=angular-infrastructure-configurations
```

# Remove library

```
npx nx g @nrwl/workspace:remove angular-infrastructure-configurations
```
