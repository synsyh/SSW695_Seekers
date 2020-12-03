import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // tweet type image path
  tweetTypePath: string;
  // word cloud image path
  wordCloudPath: string;
  // emoji image path
  emojiPath: string;
  relationshipPath: string;
  trendPath: string;
  userName: string;
  timeStamp;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.timeStamp = new Date().getTime();
      this.userName = data.userName;
      this.httpClient.get(`http://localhost:8080/restore?id=${this.userName}&uuid=${this.timeStamp}`).subscribe(() => {
        console.log('success store');
        this.wordCloudPath = `http://localhost:8080/wordcloud?id=${this.userName}&uuid=${this.timeStamp}`;
        this.emojiPath = `http://localhost:8080/emojicloud?id=${this.userName}&uuid=${this.timeStamp}`;
        this.relationshipPath = `http://localhost:8080/relationgraph?id=${this.userName}&uuid=${this.timeStamp}`;
        this.trendPath = `http://localhost:8080/trendchart?id=${this.userName}&uuid=${this.timeStamp}`;
      });
    });
  }
}
