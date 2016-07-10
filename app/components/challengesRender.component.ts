import {Component, OnInit} from "@angular/core";
import {Member} from "../models/member.model";
@Component({
    selector: 'challenges-render',
    templateUrl: 'app/html/challengesRender.component.html',
    stylesUrl: ['app/css/challengesRender.css']
})

export class ChallengesRender implements OnInit{
    
    public currentChallenge: Member[];
    public currentMember: Member;

    public ngOnInit():void{
      this.currentChallenge = [
          new Member( "$_1","challenge1" , "https://img.buzzfeed.com/buzzfeed-static/static/2016-06/17/13/enhanced/buzzfeed-prod-fastlane01/grid-cell-16909-1466183824-10.jpg", 10),
          new Member( "$_2", "challenge2" , "https://img.buzzfeed.com/buzzfeed-static/static/2016-06/17/13/enhanced/buzzfeed-prod-fastlane01/grid-cell-16909-1466183824-10.jpg", 15),
          new Member( "$_3","challenge1" , "https://img.buzzfeed.com/buzzfeed-static/static/2016-06/17/13/enhanced/buzzfeed-prod-fastlane01/grid-cell-16909-1466183824-10.jpg", 14),
          new Member( "$_4", "challenge2" , "https://img.buzzfeed.com/buzzfeed-static/static/2016-06/17/13/enhanced/buzzfeed-prod-fastlane01/grid-cell-16909-1466183824-10.jpg", 9),
          new Member( "$_5","challenge1" , "https://img.buzzfeed.com/buzzfeed-static/static/2016-06/17/13/enhanced/buzzfeed-prod-fastlane01/grid-cell-16909-1466183824-10.jpg", 7),
          new Member( "$_6", "challenge2" , "https://img.buzzfeed.com/buzzfeed-static/static/2016-06/17/13/enhanced/buzzfeed-prod-fastlane01/grid-cell-16909-1466183824-10.jpg", 18),
      ];

        this.currentMember = new Member("", "", "", 0);
    }
    private row = 0;
    public getMarginLeft(id: string):number{
        let margin = 0;
        this.row++;
        if(this.row == 1) {
            return 0;
        }
        else if(this.row == 2){
            return 322.67;
        }
        else {
            this.row = 0;
            return 645.34;
        }
        return 0;
        
        return margin;
    }
    
    public getMarginTop(id: string):number{
        let coef = 322.67;
        let index = this.getIndex(id);
        console.log(index +" "+id);
        return coef*(Math.floor(index /3));
    }

    private getIndex(id: string):number{
        let index = -1;

        for(var i=0;i<this.currentChallenge.length;i++){
            if(this.currentChallenge[i].id == id) return i;
        }

        return index;
    }

    setMember(member: Member):void{
        console.log(member);
        this.currentMember = member;
    }
    
    public increaseLikes(member: Member){
        member.likes++;
    }
}