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
  userName: string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      console.log(data.userName);
      this.userName = data.userName;
      this.wordCloudPath = `http://localhost:8080/wordcloud?id=${this.userName}`;
      this.emojiPath = `http://localhost:8080/emojicloud?id=${this.userName}`;
    });
  }
}
