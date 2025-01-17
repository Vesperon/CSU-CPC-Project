import { PieceType, TeamType, Piece } from "../components/Chessboard/Chessboard";

export  default class Referee {
    tileIsOccupied(x:number, y:number, boardState: Piece[]): boolean{
        console.log("Tile Checking Occupation");

        const piece = boardState.find((p) => p.x === x && p.y === y);

        if(piece){
            return true;
        } else{
            return false;
        }
    }

    isValidMove(px: number, py: number, x: number, y: number, type: PieceType, team:TeamType, boardState: Piece[]){
        console.log("Referee checking");
        console.log(`Previous Location":(${px},${py})`);
        console.log(`Current Location":(${x},${y})`);
        console.log(`Piece Type: ${type}`);
        console.log(`Team Type: ${team}`);

        if(type === PieceType.PAWN){
            const specialRow = (team === TeamType.OUR) ? 1 : 6;
            const pawnDirection = (team === TeamType.OUR) ? 1: -1;

            if(px === x && py === specialRow && y - py === 2 * pawnDirection){
                if(!this.tileIsOccupied(x, y, boardState) && !this.tileIsOccupied(x, y - pawnDirection, boardState)){
                    return true;
                }
            } else if(px === x && y - py === pawnDirection){
                if(!this.tileIsOccupied(x, y, boardState)){
                    return true;
                }
            }
        }
        return false;
    }
}