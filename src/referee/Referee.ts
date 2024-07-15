import { PieceType, TeamType } from "../components/Chessboard/Chessboard";

export  default class Referee {
    isValidMove(px: number, py: number, x: number, y: number, type: PieceType, team:TeamType){
        console.log("Referee checking");
        console.log(`Previous Location":(${px},${py})`);
        console.log(`Current Location":(${x},${y})`);
        console.log(`Piece Type: ${type}`);
        console.log(`Team Type: ${team}`);
        if(type === PieceType.PAWN){
            if(team === TeamType.OUR){
                if(py === 1){
                    if(px === x && (y - py === 1 || y - py === 2)){
                        console.log("Valid Move!");
                        return true;
                    }
                }
            }
        }
        return false;
    }
}