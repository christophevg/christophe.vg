---
title: Python Notebook
---

My notes on installing, running and using Python notebooks, aka Jupyter

# Installation

```bash
$ sudo pip install --upgrade pip
$ pip install jupyter
```

## Running

```bash
$ mkdir notebooks
$ cd notebooks/
$ jupyter notebook
[I 13:47:23.481 NotebookApp] Serving notebooks from local directory: /Users/xtof/Workspace/notebooks
[I 13:47:23.481 NotebookApp] 0 active kernels 
[I 13:47:23.481 NotebookApp] The Jupyter Notebook is running at: http://localhost:8888/?token=9784c860dc5727cbeb0a2c0e08f88dc42992fe8928cbd7ba
[I 13:47:23.482 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 13:47:23.482 NotebookApp] 
    
    Copy/paste this URL into your browser when you connect for the first time,
    to login with a token:
        http://localhost:8888/?token=9784c860dc5727cbeb0a2c0e08f88dc42992fe8928cbd7ba
[I 13:47:23.975 NotebookApp] Accepting one-time-token-authenticated connection from ::1
```

This opens the notebook dashboard in your browser:

![Notebook Dashboard](images/full/notebook-dashboard.png)

# Using

![Simple Notebook](images/full/notebook-simple.png)

Keyboard shortcuts: `Ctrl+m h` or `ESC h` (`Ctrl+m` of `ESC` give command mode)

Command highlights:

* `a` add cell above current
* `b` add cell below current
* `dd` delete current cell
* `m` turn cell into Markdown formatted cell

`Enter` puts the current cell in edit mode. `ESC` toggles back to navigation.

`shift+enter` executes/renders the current cell.
