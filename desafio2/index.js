let comando = "Start";

switch (comando.toLowerCase()) {
  case "start":
    console.log("Bot started");
    break;
  case "stop":
    console.log("Bot stopped");
    break;
  case "pause":
    console.log("Bot paused");
    break;
  default:
    console.log("unknown command");
}
