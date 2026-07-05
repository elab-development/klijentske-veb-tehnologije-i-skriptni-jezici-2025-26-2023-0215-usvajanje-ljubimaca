@echo off
cd /d d:\Projekti\Marinko

mkdir .github
mkdir frontend\src\styles
mkdir frontend\src\types
mkdir frontend\src\data
mkdir frontend\src\utils
mkdir frontend\src\i18n
mkdir frontend\src\context
mkdir frontend\src\hooks
mkdir frontend\src\components\ui\PetCard
mkdir frontend\src\components\ui\TagBadge
mkdir frontend\src\components\ui\HeartButton
mkdir frontend\src\components\ui\StatBar
mkdir frontend\src\components\layout\Navbar
mkdir frontend\src\components\layout\LanguageToggle
mkdir frontend\src\components\filters\FilterPanel
mkdir frontend\src\components\filters\SearchBar
mkdir frontend\src\pages\Home
mkdir frontend\src\pages\Browse
mkdir frontend\src\pages\PetDetail
mkdir frontend\src\pages\Login
mkdir frontend\src\pages\SignUp
mkdir frontend\src\pages\Profile
mkdir backend\src\config
mkdir backend\src\models
mkdir backend\src\controllers
mkdir backend\src\routes
mkdir backend\src\services
mkdir backend\src\middleware
mkdir db\seeds

echo.
echo ✓ All directories created successfully!
echo.
echo Verifying some key directories:
if exist .github echo   ✓ .github
if exist frontend\src\styles echo   ✓ frontend\src\styles
if exist backend\src\models echo   ✓ backend\src\models
if exist db\seeds echo   ✓ db\seeds

pause
