@echo off
cd /d d:\Projekti\Marinko
python run_create_dirs.py
echo.
if exist .github (
    echo .github EXISTS - SUCCESS
    dir .github
) else (
    echo .github MISSING - FAILED
)
