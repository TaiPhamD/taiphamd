## Music Transcription

The goal of this project is to create a system that would analyze a music track then transcripe the vocal track into cello notes and the instrumental into piano notes.

The reason I choose cello as the instrument that most closely related to the vocal track is based on this [paper](https://newt.phys.unsw.edu.au/jw/reprints/Voicelikeness.pdf)

``` mermaid
graph TD
AudioTrack --> Analysis{Track separation}
Analysis -->|Vocal| C[Cello Pitch estimation]
Analysis -->|Instrumental| P[Piano Pitch estimation]
```


### Technical paper

#### Piano transcription
This technical [paper](https://arxiv.org/pdf/1710.11153.pdf) provides a method for transcribing piano audio into a time series output of piano notes.
   

### Dataset
Open source data set that are useful with this projects are:

#### Piano MAPS dataset
[MAPS](http://www.tsi.telecom-paristech.fr/aao/en/2010/07/08/maps-database-a-piano-database-for-multipitch-estimation-and-automatic-transcription-of-music/)


#### Vocal dataset
TBD