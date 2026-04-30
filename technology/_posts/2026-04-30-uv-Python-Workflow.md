---
title: "uv: A Modern Python Workflow"
tags:
  - python
  - uv
  - development
  - agentic
prompt: Create a blog post documenting uv-based Python workflow for the christophe.vg website. Cover installation, project management, dependency management, and migration from pyenv.
header:
  teaser: /technology/images/thumb/uv.png
  image: /technology/images/header/uv.png
---

After years of using pyenv for Python version management and pip for dependencies, I've made the switch to uv. This unified tool has dramatically simplified my Python workflow while being 10-100x faster than traditional tools.

## What is uv?

uv is a single tool from {% include external link="https://astral.sh" title="Astral" %} (the creators of Ruff) that replaces multiple Python development tools:

| Replaces | Benefit |
|----------|---------|
| pip, pip-tools | 10-100x faster package resolution |
| virtualenv, venv | Built-in, automatic management |
| pyenv, pyenv-virtualenv | Built-in Python version management |
| poetry | Simpler configuration |
| pipx | `uvx` command for one-off tools |

The speed improvement comes from uv being written in Rust, making dependency resolution and package installation dramatically faster than pip.

## Installation on macOS

The recommended installation on macOS is straightforward:

```bash
# Using Homebrew (recommended)
brew install uv

# Or via official installer
curl -LsSf https://astral.sh/uv/install.sh | sh

# Verify installation
uv --version
```

Install uv globally - it manages Python versions and virtual environments per-project, so it should be available system-wide.

## The Core Concept: One Tool, No Manual Activation

The key insight with uv is that you **never manually manage virtual environments**. Instead of:

```bash
# Old way (pyenv + pip)
python -m venv .venv
source .venv/bin/activate
pip install package
python main.py
```

You simply use:

```bash
# New way (uv)
uv add package
uv run python main.py
```

uv automatically creates and manages a `.venv` directory in your project. The `uv run` command ensures your code runs in the correct virtual environment without any manual activation.

## Creating a New Project

Starting a new project is simple:

```bash
# Create new application
uv init my-app && cd my-app

# Create new library
uv init --lib my-library && cd my-library

# Initialize existing project
cd existing-project && uv init
```

### Project Structure

uv uses a standard structure that works well with modern Python packaging:

```
my-project/
├── pyproject.toml      # All configuration in one file
├── uv.lock             # Locked dependencies (commit this!)
├── .python-version     # Pinned Python version
├── .venv/              # Auto-managed (gitignore)
├── src/my_package/
│   ├── __init__.py
│   └── py.typed        # PEP 561 marker for type hints
└── tests/
    ├── conftest.py
    └── test_*.py
```

The `pyproject.toml` file contains all project metadata, dependencies, and tool configuration. No more separate `setup.py`, `requirements.txt`, `setup.cfg`, or `.coveragerc` files.

## Managing Dependencies

Adding dependencies is intuitive:

```bash
uv add fastapi uvicorn      # Production dependencies
uv add --dev pytest ruff    # Development dependencies
uv add --optional docs sphinx  # Optional dependency groups
```

Removing dependencies:

```bash
uv remove package-name
```

Lock files are managed automatically:

```bash
uv sync                     # Sync to lock file
uv sync --frozen            # Verify lock is current (CI)
uv lock --upgrade           # Update all dependencies
uv lock --upgrade-package pkg  # Update specific package
```

## Python Version Management

This is where uv really shines - no more pyenv! Python version management is built-in:

```bash
uv python install 3.12     # Install Python version
uv python pin 3.12         # Pin for current project
uv python list             # List available versions
```

When you create a project, uv automatically creates a `.python-version` file. This is similar to pyenv's `.python-version` but managed directly by uv.

## Daily Commands

### Running Code

```bash
uv run python main.py                    # Run application
uv run pytest                            # Run all tests
uv run pytest tests/test_module.py       # Run specific file
uv run pytest -n auto                    # Run in parallel
uv run pytest --cov=src --cov-report=term-missing  # With coverage
```

### Code Quality

```bash
uv run ruff check src/         # Lint
uv run ruff check --fix src/   # Auto-fix issues
uv run ruff format src/        # Format code
uv run mypy src/               # Type check
```

### One-Off Tools

For running tools system-wide without installing them in a project:

```bash
uvx ruff check .              # Run ruff globally
uvx black .
uvx mypy --version
```

## Multi-Version Testing with tox

For libraries that need to support multiple Python versions:

```bash
# Install all required Python versions (one-time setup)
uv python install 3.10 3.11 3.12

# Run tests across all versions
uv run tox                    # All configured environments
uv run tox -e py310           # Specific version
uv run tox parallel           # Parallel execution
```

tox creates and manages its own isolated environments in `.tox/` - no manual setup needed.

## Migration from pyenv/pip

Migrating an existing project is straightforward:

```bash
# 1. Initialize uv in existing project
cd existing-project && uv init

# 2. Add dependencies from requirements.txt
uv add <packages from requirements.txt>

# 3. Add development dependencies
uv add --dev pytest ruff mypy

# 4. Update structure (optional but recommended)
# Move code to src/ layout
# Add py.typed marker

# 5. Remove old files
rm setup.py setup.cfg requirements*.txt tox.ini .coveragerc

# 6. Verify everything works
uv sync && uv run pytest && uv run ruff check src
```

If you have a `.python-version` file from pyenv, uv will respect it. You can also let uv manage it with `uv python pin`.

## Comparison: uv vs pyenv/pip

| Aspect | uv | pyenv + pip |
|--------|-----|-------------|
| Speed | 10-100x faster | Baseline |
| Virtual envs | Automatic | Manual |
| Python versions | Built-in | Requires pyenv |
| Lock files | Built-in | Requires pip-tools |
| Config files | One (pyproject.toml) | Multiple |
| Activation | Never needed | Required |

## When to Stick with Alternatives

uv isn't always the right choice:

| Scenario | Recommendation |
|----------|----------------|
| Data science with C/Fortran libraries | Use Conda |
| Legacy project maintenance | Keep existing setup |
| Team already using Poetry | Stay consistent |

## Summary

The transition from pyenv to uv has simplified my Python workflow significantly:

- **No more manual virtual environment management** - `uv run` handles everything
- **Faster package operations** - dependency resolution is instant
- **Single configuration file** - everything in `pyproject.toml`
- **Built-in Python version management** - no need for pyenv

For new Python projects, I now use uv exclusively. For existing projects, the migration is painless and well worth the effort.

## References

* {% include external link="https://docs.astral.sh/uv/" title="uv Documentation" %}
* {% include external link="https://pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html" title="Python Packaging Guide" %}
* {% include external link="https://learn.scientific-python.org/development/guides/packaging-simple/" title="Scientific Python - Simple Packaging" %}