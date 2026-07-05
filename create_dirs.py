#!/usr/bin/env python3
import os

base_path = r'd:\Projekti\Marinko'

directories = [
    '.github',
    'frontend/src/styles',
    'frontend/src/types',
    'frontend/src/data',
    'frontend/src/utils',
    'frontend/src/i18n',
    'frontend/src/context',
    'frontend/src/hooks',
    'frontend/src/components/ui/PetCard',
    'frontend/src/components/ui/TagBadge',
    'frontend/src/components/ui/HeartButton',
    'frontend/src/components/ui/StatBar',
    'frontend/src/components/layout/Navbar',
    'frontend/src/components/layout/LanguageToggle',
    'frontend/src/components/filters/FilterPanel',
    'frontend/src/components/filters/SearchBar',
    'frontend/src/pages/Home',
    'frontend/src/pages/Browse',
    'frontend/src/pages/PetDetail',
    'frontend/src/pages/Login',
    'frontend/src/pages/SignUp',
    'frontend/src/pages/Profile',
    'backend/src/config',
    'backend/src/models',
    'backend/src/controllers',
    'backend/src/routes',
    'backend/src/services',
    'backend/src/middleware',
    'db/seeds'
]

created = 0
for directory in directories:
    full_path = os.path.join(base_path, directory)
    os.makedirs(full_path, exist_ok=True)
    created += 1

print(f'✓ Created all {created} directories successfully')
