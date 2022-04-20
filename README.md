This Repo has been created to test whether react-draggable actually swallows touch(end?) events thus preventing onClick events on touch devices or whether this problem only occurs using the google chrome touch emulator in the dev tools. 

Result: 
- onClick is only fired on touch devices when only tapping the button. A longer press on the button results in the draggable swallowing the action.
- onPointerDown is always fired.
