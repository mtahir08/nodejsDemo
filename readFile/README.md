#Why use path.resolve?
What's all that business about path.resolve? Why can't we just say /public? The
short answer is that we could, but it's not cross-platform.
On Mac and Linux, we want this directory:
/public
But on Windows, we want this directory:
\public
Node's built-in path module will make sure that things run smoothly on Windows,
Mac, and Linux.