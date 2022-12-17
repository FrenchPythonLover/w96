//!wrt $BSPEC:{"ssy":"cli"}

const term = this.boxedEnv.term;

class CLIApplication extends WApplication {
    /**
     * Application constructor.
     */
    constructor() {
        super()
    }
    
    /**
     * Main entry point.
     * @param {String[]} argv The program arguments.
     */
    async main(argv) {
        super.main(argv);
        
        // Write some text in the terminal.
        term.writeln("\\Nmap//");
        term.writeln("Copyright R - ME");
        
        // Get user input and store it in a variable.
        let e = await term.prompt("IP: ");
        term.writeln(`Scanning ${e}....`);
        term.writeln(`Number of ports founded on ${e} : 1454-2188 Ports`);
        // Pause the program.
        await term.pause()
    }
}

return await WApplication.execAsync(new CLIApplication(), this.boxedEnv.args, this);
