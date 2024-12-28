const check = _ => 
    isSignal(_) ? (signal = true, this.signalRef(_.signal)) :
    isExpr$1(_) ? (signal = true, this.exprRef(_.expr)) :
    _;
