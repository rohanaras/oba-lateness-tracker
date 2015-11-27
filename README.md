# oba-lateness-tracker
### A d3 Map Example

This project is a visualization of census blocks in King County colored by the average lateness of busses at bus stops within that block. It uses d3.js's ability to draw a map from a geoJSON file format and encode it with aditional data. 

In general, d3 is a tool that a web developer or data scientist might want to use to visually explain data to others. It attempts to maxamize flexibility in how the data can be presented. It is *not* a tool for exploratory analysis. Rather, it is a tool for effective communication. It achieves this by allowing manipulation of the DOM using data. 

The weakness of this tool comes directly from it's strengths: while d3 allows the freedom to create very complex visualizations, that same freedom makes creating simple charts more complex than other tools. On the flip side, there is an active community that provides plenty of example code such that many simple visualizations can be created by modifying existing code. 

The tool is continuosly being updated. The last commit (as of this posting) was 10 days ago, and there are 180 open issues. 

The visualization is being hosted [here](http://rohanaras.github.io/oba-lateness-tracker/).
Since I was not able to add an effective legend, please note that blue means early, green means on time, and yellow to red means that the busses are increasingly late. Also note that the visualzation itself may take a couple moments to load.

I used the following resources over the course of this project:
* [Long list of d3 tutorials](https://github.com/mbostock/d3/wiki/Tutorials)
* [A tutorial on d3 maps](http://maptimeboston.github.io/d3-maptime/#/1)
* [Centering maps in d3](http://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object)
* [Example for using a button to update data](http://bl.ocks.org/d3noob/7030f35b72de721622b8)
* [Choropleth mapping](http://bl.ocks.org/mbostock/4060606)
* [Shapefile to geoJSON](http://ogre.adc4gis.com/)
* [Working geoJSON linter](http://geojsonlint.com/)
* [Make a map from topoJSON (I didn't actually end up using this)](http://bost.ocks.org/mike/map/)

I would add http://www.mapshaper.org/ to this list; however, be warned that it's shapefile to geoJSON/topoJSON converter produces files that are read as giberish by other linters and d3. I ended up wasting a lot of time trying to figure out why my maps were rendering as grey squares. This was the reason. 
