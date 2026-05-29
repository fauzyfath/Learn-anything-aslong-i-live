const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

const flattenPlaylists = arr => {
  let result = [];

  if(!Array.isArray(arr)){
    return [];
  }
  
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
      arr[i][j].source = [i,j]
      result.push(arr[i][j]);
    }
  }
  return result;
}

const scoreTracks = arr => {
  const result = [...arr];
  for(let i = 0; i<arr.length; i++){
    result[i].score = result[i].votes * 10 - Math.abs(result[i].bpm-120);
  }
  return result;
}

const dedupeTracks = arr => {
  const result = [...arr];
  for(let i = 0; i<result.length; i++) {
    for(let j = i+1; j<result.length; j++){
      if(result[i].trackId == result[j].trackId){
        result.splice(j,1);
      }
    }
  }
  return result
}

const enforceArtistQuota = (arr, number) =>{
  const result = [];
  for(let i = 0; i<number; i++){
    if(arr[i] === undefined){
      break
    }
    result.push(arr[i])
  }
  return result
}

const buildSchedule = arr =>{
  const [...cpyArr ] = arr;
  const result = []
  let slotIndex = 1;
  for(let i = 0; i<arr.length; i++){
    cpyArr[i].slot = slotIndex;
    let slot = cpyArr[i].slot;
    let trackId = cpyArr[i].trackId
    result.push({slot, trackId})
    slotIndex++
  }
  return result
}

const remixPlaylist = (arr,maxNumber) =>{
  const flatten = flattenPlaylists(arr);
  const score = scoreTracks(flatten);
  const dedupe = dedupeTracks(score);
  const enforce = enforceArtistQuota(dedupe,maxNumber);
  const schedule = buildSchedule(enforce)
  return schedule
}
console.log(flattenPlaylists(playlists))
// console.log(remixPlaylist(playlists,2))
