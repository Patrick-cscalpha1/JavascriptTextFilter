//text analyser from data gotten from a station
//We want to extract the station code and name, and put them together in a string with the following structure:
//MAN; Manchester Piccadilly

let text = ["MAN675847583748sjt567654;Manchester Piccadilly","GNF576746573fhdg4737dh4;Greenfield",
"LIV5hg65hd737456236dch46dg4;Liverpool Lime Street","SYB4f65hf75f736463;Stalybridge",
    "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield"];

    for (const station of text) {

        let stationCode = station.slice(0,3);
        let indexOfSemicolon = station.indexOf(";");
        let stationName = station.slice(indexOfSemicolon+1);

        console.log(stationCode,station[indexOfSemicolon]," ",stationName);
    }

